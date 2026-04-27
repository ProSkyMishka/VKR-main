import SwiftUI

struct Childblc001: View {
    @State private var local = 0
    @Binding var shared: Int
    var body: some View {
        VStack {
            Text("blc001-local: \(local)")
            HStack {
                Button("blc001-incLocal") { local += 1 }
                Button("blc001-incShared") { shared += 1 }
            }
        }
    }
}

struct ContentView: View {
    @State private var shared = 0
    var body: some View {
        VStack {
            Text("blc001-shared: \(shared)").font(.headline)
            Childblc001(shared: $shared)
        }
        .padding()
    }
}
