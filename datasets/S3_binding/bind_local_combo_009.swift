import SwiftUI

struct Childblc009: View {
    @State private var local = 0
    @Binding var shared: Int
    var body: some View {
        VStack {
            Text("blc009-local: \(local)")
            HStack {
                Button("blc009-incLocal") { local += 1 }
                Button("blc009-incShared") { shared += 1 }
            }
        }
    }
}

struct ContentView: View {
    @State private var shared = 0
    var body: some View {
        VStack {
            Text("blc009-shared: \(shared)").font(.headline)
            Childblc009(shared: $shared)
        }
        .padding()
    }
}
