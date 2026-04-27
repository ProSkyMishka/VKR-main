import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(alignment: .leading) {
            ForEach(0..<4, id: \.self) { r in
                if r % 2 == 0 {
                    HStack {
                        ForEach(0..<3, id: \.self) { c in
                            Text("ns001-r\(r)c\(c)")
                        }
                    }
                } else {
                    Text("ns001-skip\(r)").foregroundColor(.gray)
                }
            }
        }
        .padding()
    }
}
