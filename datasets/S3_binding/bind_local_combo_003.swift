import SwiftUI

struct Childblc003: View {
    @State private var local = 0
    @Binding var shared: Int
    var body: some View {
        VStack {
            Text("blc003-local: \(local)")
            HStack {
                Button("blc003-incLocal") { local += 1 }
                Button("blc003-incShared") { shared += 1 }
            }
        }
    }
}

struct ContentView: View {
    @State private var shared = 0
    var body: some View {
        VStack {
            Text("blc003-shared: \(shared)").font(.headline)
            Childblc003(shared: $shared)
        }
        .padding()
    }
}
