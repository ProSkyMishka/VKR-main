import SwiftUI

struct Childblc011: View {
    @State private var local = 0
    @Binding var shared: Int
    var body: some View {
        VStack {
            Text("blc011-local: \(local)")
            HStack {
                Button("blc011-incLocal") { local += 1 }
                Button("blc011-incShared") { shared += 1 }
            }
        }
    }
}

struct ContentView: View {
    @State private var shared = 0
    var body: some View {
        VStack {
            Text("blc011-shared: \(shared)").font(.headline)
            Childblc011(shared: $shared)
        }
        .padding()
    }
}
