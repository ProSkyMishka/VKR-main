import SwiftUI

struct Childblc010: View {
    @State private var local = 0
    @Binding var shared: Int
    var body: some View {
        VStack {
            Text("blc010-local: \(local)")
            HStack {
                Button("blc010-incLocal") { local += 1 }
                Button("blc010-incShared") { shared += 1 }
            }
        }
    }
}

struct ContentView: View {
    @State private var shared = 0
    var body: some View {
        VStack {
            Text("blc010-shared: \(shared)").font(.headline)
            Childblc010(shared: $shared)
        }
        .padding()
    }
}
