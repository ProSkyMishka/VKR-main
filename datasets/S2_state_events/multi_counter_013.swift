import SwiftUI

struct ContentView: View {
    @State private var a = 0
    @State private var b = 0
    @State private var c = 0

    var body: some View {
        VStack(spacing: 8) {
            Text("mc013-a: \(a)")
            Text("mc013-b: \(b)")
            Text("mc013-c: \(c)")
            HStack {
                Button("mc013-incA") { a += 1 }
                Button("mc013-incB") { b += 2 }
                Button("mc013-incC") { c += 3 }
            }
            HStack {
                Button("mc013-rstA") { a = 0 }
                Button("mc013-rstB") { b = 0 }
                Button("mc013-rstC") { c = 0 }
            }
        }
        .padding()
    }
}
