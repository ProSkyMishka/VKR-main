import SwiftUI

struct ContentView: View {
    var body: some View {
        VStack(spacing: 6) {
            HStack(spacing: 6) {
                Text("tg007-t1")
                    .font(.caption)
                    .frame(width: 64, height: 64)
                    .background(Color.gray)
                    .foregroundColor(.white)
                    .cornerRadius(8)
                Text("tg007-t2")
                    .font(.caption)
                    .frame(width: 64, height: 64)
                    .background(Color.mint)
                    .foregroundColor(.white)
                    .cornerRadius(8)
                Text("tg007-t3")
                    .font(.caption)
                    .frame(width: 64, height: 64)
                    .background(Color.blue)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
            HStack(spacing: 6) {
                Text("tg007-t4")
                    .font(.caption)
                    .frame(width: 64, height: 64)
                    .background(Color.green)
                    .foregroundColor(.white)
                    .cornerRadius(8)
                Text("tg007-t5")
                    .font(.caption)
                    .frame(width: 64, height: 64)
                    .background(Color.orange)
                    .foregroundColor(.white)
                    .cornerRadius(8)
                Text("tg007-t6")
                    .font(.caption)
                    .frame(width: 64, height: 64)
                    .background(Color.pink)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
            HStack(spacing: 6) {
                Text("tg007-t7")
                    .font(.caption)
                    .frame(width: 64, height: 64)
                    .background(Color.purple)
                    .foregroundColor(.white)
                    .cornerRadius(8)
                Text("tg007-t8")
                    .font(.caption)
                    .frame(width: 64, height: 64)
                    .background(Color.red)
                    .foregroundColor(.white)
                    .cornerRadius(8)
                Text("tg007-t9")
                    .font(.caption)
                    .frame(width: 64, height: 64)
                    .background(Color.yellow)
                    .foregroundColor(.white)
                    .cornerRadius(8)
            }
        }
        .padding()
    }
}
