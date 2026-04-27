import SwiftUI

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    @State private var c = 0

    var body: some View {
        VStack(spacing: 8) {
            Text("mc014-a: \(a)")
            Text("mc014-b: \(b)")
            Text("mc014-c: \(c)")
            HStack {
                Button("mc014-incA") { a += 1 }
                Button("mc014-incB") { b += 2 }
                Button("mc014-incC") { c += 3 }
            }
            HStack {
                Button("mc014-rstA") { a = 0 }
                Button("mc014-rstB") { b = 0 }
                Button("mc014-rstC") { c = 0 }
            }
        }
        .padding()
    }
}
