import SwiftUI

struct Childblc007: View {
    @State private var local = 0
    @Binding var shared: Int
    var body: some View {
        VStack {
            Text("blc007-local: \(local)")
            HStack {
                Button("blc007-incLocal") { local += 1 }
                Button("blc007-incShared") { shared += 1 }
            }
        }
    }
}

struct ContentView: View {
    @State private var shared = 0
    var body: some View {
        VStack {
            Text("blc007-shared: \(shared)").font(.headline)
            Childblc007(shared: $shared)
        }
        .padding()
    }
}
