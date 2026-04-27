import SwiftUI

struct Childblc008: View {
    @State private var local = 0
    @Binding var shared: Int
    var body: some View {
        VStack {
            Text("blc008-local: \(local)")
            HStack {
                Button("blc008-incLocal") { local += 1 }
                Button("blc008-incShared") { shared += 1 }
            }
        }
    }
}

struct ContentView: View {
    @State private var shared = 0
    var body: some View {
        VStack {
            Text("blc008-shared: \(shared)").font(.headline)
            Childblc008(shared: $shared)
        }
        .padding()
    }
}
