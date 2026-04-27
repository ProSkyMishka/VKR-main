import SwiftUI

struct Childblc002: View {
    @State private var local = 0
    @Binding var shared: Int
    var body: some View {
        VStack {
            Text("blc002-local: \(local)")
            HStack {
                Button("blc002-incLocal") { local += 1 }
                Button("blc002-incShared") { shared += 1 }
            }
        }
    }
}

struct ContentView: View {
    @State private var shared = 0
    var body: some View {
        VStack {
            Text("blc002-shared: \(shared)").font(.headline)
            Childblc002(shared: $shared)
        }
        .padding()
    }
}
