import SwiftUI

struct Childblc006: View {
    @State private var local = 0
    @Binding var shared: Int
    var body: some View {
        VStack {
            Text("blc006-local: \(local)")
            HStack {
                Button("blc006-incLocal") { local += 1 }
                Button("blc006-incShared") { shared += 1 }
            }
        }
    }
}

struct ContentView: View {
    @State private var shared = 0
    var body: some View {
        VStack {
            Text("blc006-shared: \(shared)").font(.headline)
            Childblc006(shared: $shared)
        }
        .padding()
    }
}
